package fr.smartehr.front.domain;


import javax.persistence.*;

import org.springframework.data.elasticsearch.annotations.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * A DocumentMed.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class DocumentMedResponse implements Serializable {

    private static final long serialVersionUID = 1L;

    private String doc_date;

    private String doc_type;
    
    private String document;
    
    private List<DocumentMed> documentMedList = new ArrayList<>();

	public String getDoc_date() {
		return doc_date;
	}

	public void setDoc_date(String doc_date) {
		this.doc_date = doc_date;
	}

	public String getDoc_type() {
		return doc_type;
	}

	public void setDoc_type(String doc_type) {
		this.doc_type = doc_type;
	}

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public List<DocumentMed> getDocumentMedList() {
		return documentMedList;
	}

	public void setDocumentMedList(List<DocumentMed> documentMedList) {
		this.documentMedList = documentMedList;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "DocumentMedResponse [doc_date=" + doc_date + ", doc_type=" + doc_type + ", document=" + document
				+ ", documentMedList=" + documentMedList + "]";
	}


}
