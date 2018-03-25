package fr.smartehr.front.domain.elastic;

import java.util.ArrayList;
import java.util.List;

public class QueryTerms {

	List<String> lemmaterm = new ArrayList<>();

	public QueryTerms(final List<String> terms) {
		lemmaterm.addAll(terms);
	}

	public List<String> getLemmaterm() {
		return lemmaterm;
	}

	public void setLemmaterm(List<String> lemmaterm) {
		this.lemmaterm = lemmaterm;
	}

	@Override
	public String toString() {
		return "QueryTerms [lemmaterm=" + lemmaterm + "]";
	}
	
}
