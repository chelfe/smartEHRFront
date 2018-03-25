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
@Document(indexName = "document")
@JsonIgnoreProperties(ignoreUnknown = true)
public class DocumentMed implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Column(name = "numphrase")
    private Integer numphrase;

    @Column(name = "sentence")
    private String sentence;

    @Column(name = "document")
    private String document;

    @Column(name = "docdate")
    private String doc_date;

    @Column(name = "startposition")
    private Integer startposition;

    @Column(name = "endposition")
    private Integer endposition;

    @Column(name = "candidatetermstring")
    private String candidatetermstring;

    @Column(name = "candidateterm")
    private String candidateterm;

    @Column(name = "normalizedterm")
    private String normalizedterm;

    @Column(name = "lemmaterm")
    private String lemmaterm;

    @Column(name = "doc_type")
    private String doc_type;
    
    private List<String> candidateTermList = new ArrayList<>();

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getNumphrase() {
		return numphrase;
	}

	public void setNumphrase(Integer numphrase) {
		this.numphrase = numphrase;
	}

	public String getSentence() {
		return sentence;
	}

	public void setSentence(String sentence) {
		this.sentence = sentence;
	}

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public String getDoc_date() {
		return doc_date;
	}

	public void setDoc_date(String doc_date) {
		this.doc_date = doc_date;
	}

	public Integer getStartposition() {
		return startposition;
	}

	public void setStartposition(Integer startposition) {
		this.startposition = startposition;
	}

	public Integer getEndposition() {
		return endposition;
	}

	public void setEndposition(Integer endposition) {
		this.endposition = endposition;
	}

	public String getCandidatetermstring() {
		return candidatetermstring;
	}

	public void setCandidatetermstring(String candidatetermstring) {
		this.candidatetermstring = candidatetermstring;
	}

	public String getCandidateterm() {
		return candidateterm;
	}

	public void setCandidateterm(String candidateterm) {
		this.candidateterm = candidateterm;
	}

	public String getNormalizedterm() {
		return normalizedterm;
	}

	public void setNormalizedterm(String normalizedterm) {
		this.normalizedterm = normalizedterm;
	}

	public String getLemmaterm() {
		return lemmaterm;
	}

	public void setLemmaterm(String lemmaterm) {
		this.lemmaterm = lemmaterm;
	}

	public String getDoc_type() {
		return doc_type;
	}

	public void setDoc_type(String doc_type) {
		this.doc_type = doc_type;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "DocumentMed [id=" + id + ", numphrase=" + numphrase + ", document="
				+ document + ", doc_date=" + doc_date + ", startposition=" + startposition + ", endposition="
				+ endposition + ", candidatetermstring=" + candidatetermstring + ", candidateterm=" + candidateterm
				+ ", normalizedterm=" + normalizedterm + ", lemmaterm=" + lemmaterm + ", doc_type=" + doc_type + "]";
	}

	public List<String> getCandidateTermList() {
		return candidateTermList;
	}

	public void setCandidateTermList(List<String> candidateTermList) {
		this.candidateTermList = candidateTermList;
	}


}
