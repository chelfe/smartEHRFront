package fr.smartehr.front.domain.elastic;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DocSearchResult {

	int took;
	
	DocSearchHits hits;

	public int getTook() {
		return took;
	}

	public void setTook(int took) {
		this.took = took;
	}

	public DocSearchHits getHits() {
		return hits;
	}

	public void setHits(DocSearchHits hits) {
		this.hits = hits;
	}

	@Override
	public String toString() {
		return "DocSearchResult [took=" + took + ", hits=" + hits + "]";
	} 


	
}
