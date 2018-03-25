package fr.smartehr.front.repository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import fr.smartehr.front.domain.DocumentMed;
import fr.smartehr.front.domain.DocumentMedResponse;
import fr.smartehr.front.domain.elastic.DocSearchResult;
import fr.smartehr.front.domain.elastic.DocumentMedHit;
import fr.smartehr.front.domain.elastic.ElasticQuery;
import fr.smartehr.front.domain.elastic.ElasticQueryRequest;
import fr.smartehr.front.domain.elastic.QueryTerms;

@Repository
public class DocumentMedSearchService {

	private final Logger log = LoggerFactory.getLogger(DocumentMedSearchService.class);
	
	RestTemplate restTemplate = new RestTemplate();
	
	ObjectMapper mapper = new ObjectMapper();
	
	public static void main(String args[]) {
		
		Logger log = LoggerFactory.getLogger(DocumentMedSearchService.class);
//        log.info(result.toString());
    }
	
	public Collection<DocumentMedResponse> search(String query) throws JsonProcessingException {
		
		ElasticQueryRequest elasticQueryRequest = getElasticRequest(query);
		

		HttpHeaders headers = new HttpHeaders();
        headers.setContentType( MediaType.APPLICATION_JSON );
		
		HttpEntity<ElasticQueryRequest> request = new HttpEntity<>(elasticQueryRequest, headers);
		
		log.debug("Request Json : " + mapper.writerWithDefaultPrettyPrinter().writeValueAsString(elasticQueryRequest));
		
		ResponseEntity<DocSearchResult> result = restTemplate.exchange("http://91.121.106.228:9200/document/_search", HttpMethod.POST, request, DocSearchResult.class);
		
		Map<String, DocumentMedResponse> mapResults = new HashMap<>();
		
		for(DocumentMedHit hit : result.getBody().getHits().getHits()) {
			DocumentMed doc = hit.get_source();

			DocumentMedResponse documenMedFound = mapResults.get(doc.getDocument());
			if(documenMedFound == null) {
				DocumentMedResponse documentMedResponse = new DocumentMedResponse();
				documentMedResponse.setDoc_date(doc.getDoc_date());
				documentMedResponse.setDoc_type(doc.getDoc_type());
				documentMedResponse.setDocument(doc.getDocument());
				documentMedResponse.getDocumentMedList().add(doc);
				
				mapResults.put(doc.getDocument(), documentMedResponse);
			} else {
				documenMedFound.getDocumentMedList().add(doc);
			}
		}
		
		return mapResults.values();
	}


	private ElasticQueryRequest getElasticRequest(final String query) {
		ElasticQueryRequest elasticQueryRequest = new ElasticQueryRequest();
		
		List<String> terms = new ArrayList<String>();
		Collections.addAll(terms, query.split(" "));
		
		ElasticQuery elQuery =  new ElasticQuery();
		elQuery.setTerms(new QueryTerms(terms));
		
		elasticQueryRequest.setQuery(elQuery);
		
		return elasticQueryRequest;
	}
}
