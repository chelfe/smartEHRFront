package fr.smartehr.front.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.fasterxml.jackson.core.JsonProcessingException;

import fr.smartehr.front.domain.DocumentMed;
import fr.smartehr.front.domain.DocumentMedResponse;
import fr.smartehr.front.repository.DocumentMedSearchService;
import fr.smartehr.front.web.rest.errors.BadRequestAlertException;
import fr.smartehr.front.web.rest.util.HeaderUtil;
import fr.smartehr.front.web.rest.util.PaginationUtil;
import fr.smartehr.front.service.dto.DocumentMedDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing DocumentMed.
 */
@RestController
@RequestMapping("/api")
public class DocumentMedResource {

    private final Logger log = LoggerFactory.getLogger(DocumentMedResource.class);

    private static final String ENTITY_NAME = "documentMed";

//    private final DocumentMedMapper documentMedMapper;
    
    private final DocumentMedSearchService documentMedSearchService;

    public DocumentMedResource( DocumentMedSearchService documentMedSearchService) {
//        this.documentMedMapper = documentMedMapper;
        this.documentMedSearchService = documentMedSearchService;
    }

    /**
     * GET  /document-meds/:id : get the "id" documentMed.
     *
     * @param id the id of the documentMedDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the documentMedDTO, or with status 404 (Not Found)
     */
    @GetMapping("/document-meds/{id}")
    @Timed
    public ResponseEntity<DocumentMedDTO> getDocumentMed(@PathVariable Long id) {
        log.debug("REST request to get DocumentMed : {}", id);
//        DocumentMed documentMed = documentMedRepository.findOne(id);
//        DocumentMedDTO documentMedDTO = documentMedMapper.toDto(documentMed);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(null));
    }

    /**
     * SEARCH  /_search/document-meds?query=:query : search for the documentMed corresponding
     * to the query.
     *
     * @param query the query of the documentMed search
     * @param pageable the pagination information
     * @return the result of the search
     * @throws JsonProcessingException 
     */
    @GetMapping("/_search/document-meds")
    @Timed
    public ResponseEntity<List<DocumentMedResponse>> searchDocumentMeds(@RequestParam String query) throws JsonProcessingException {
        log.debug("REST request to search for a page of DocumentMeds for query {}", query);
        Collection<DocumentMedResponse> iter = documentMedSearchService.search(query);
        //HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/document-meds");
        return new ResponseEntity<>(new ArrayList<DocumentMedResponse>(iter), HttpStatus.OK);
    }

}
