package fr.smartehr.front.domain.elastic;

public class ElasticQuery {

	QueryTerms terms;

	public QueryTerms getTerms() {
		return terms;
	}

	public void setTerms(QueryTerms terms) {
		this.terms = terms;
	}

	@Override
	public String toString() {
		return "ElasticQuery [terms=" + terms + "]";
	}
	
}
