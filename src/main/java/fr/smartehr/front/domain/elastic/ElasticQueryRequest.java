package fr.smartehr.front.domain.elastic;

public class ElasticQueryRequest {

	ElasticQuery query;

	public ElasticQuery getQuery() {
		return query;
	}

	public void setQuery(ElasticQuery query) {
		this.query = query;
	}

	@Override
	public String toString() {
		return "ElasticQueryRequest [query=" + query + "]";
	}
}


