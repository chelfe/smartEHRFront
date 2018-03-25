package fr.smartehr.front.domain.elastic;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(ignoreUnknown = true)
public class DocSearchHits {
	
	int total;
	
	float max_score;
	
	List<DocumentMedHit> hits;

	@Override
	public String toString() {
		return "DocSearchHits [total=" + total + ", max_score=" + max_score + ", hits=" + hits
				+ "]";
	}

	public int getTotal() {
		return total;
	}





	public void setTotal(int total) {
		this.total = total;
	}





	public float getMax_score() {
		return max_score;
	}





	public void setMax_score(float max_score) {
		this.max_score = max_score;
	}





	public List<DocumentMedHit> getHits() {
		return hits;
	}





	public void setHits(List<DocumentMedHit> hits) {
		this.hits = hits;
	}
	
}
