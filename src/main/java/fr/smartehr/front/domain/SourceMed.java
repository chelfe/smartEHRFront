package fr.smartehr.front.domain;


import javax.persistence.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.Objects;

/**
 * A SourceMed.
 */
@Entity
@Table(name = "source_med")
@Document(indexName = "sourcemed")
public class SourceMed implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "numphrase")
    private Integer numphrase;

    @Column(name = "sentence")
    private String sentence;

    @Column(name = "document")
    private String document;

    @Column(name = "docdate")
    private String docdate;

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
    private String docType;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumphrase() {
        return numphrase;
    }

    public SourceMed numphrase(Integer numphrase) {
        this.numphrase = numphrase;
        return this;
    }

    public void setNumphrase(Integer numphrase) {
        this.numphrase = numphrase;
    }

    public String getSentence() {
        return sentence;
    }

    public SourceMed sentence(String sentence) {
        this.sentence = sentence;
        return this;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }

    public String getDocument() {
        return document;
    }

    public SourceMed document(String document) {
        this.document = document;
        return this;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getDocdate() {
        return docdate;
    }

    public SourceMed docdate(String docdate) {
        this.docdate = docdate;
        return this;
    }

    public void setDocdate(String docdate) {
        this.docdate = docdate;
    }

    public Integer getStartposition() {
        return startposition;
    }

    public SourceMed startposition(Integer startposition) {
        this.startposition = startposition;
        return this;
    }

    public void setStartposition(Integer startposition) {
        this.startposition = startposition;
    }

    public Integer getEndposition() {
        return endposition;
    }

    public SourceMed endposition(Integer endposition) {
        this.endposition = endposition;
        return this;
    }

    public void setEndposition(Integer endposition) {
        this.endposition = endposition;
    }

    public String getCandidatetermstring() {
        return candidatetermstring;
    }

    public SourceMed candidatetermstring(String candidatetermstring) {
        this.candidatetermstring = candidatetermstring;
        return this;
    }

    public void setCandidatetermstring(String candidatetermstring) {
        this.candidatetermstring = candidatetermstring;
    }

    public String getCandidateterm() {
        return candidateterm;
    }

    public SourceMed candidateterm(String candidateterm) {
        this.candidateterm = candidateterm;
        return this;
    }

    public void setCandidateterm(String candidateterm) {
        this.candidateterm = candidateterm;
    }

    public String getNormalizedterm() {
        return normalizedterm;
    }

    public SourceMed normalizedterm(String normalizedterm) {
        this.normalizedterm = normalizedterm;
        return this;
    }

    public void setNormalizedterm(String normalizedterm) {
        this.normalizedterm = normalizedterm;
    }

    public String getLemmaterm() {
        return lemmaterm;
    }

    public SourceMed lemmaterm(String lemmaterm) {
        this.lemmaterm = lemmaterm;
        return this;
    }

    public void setLemmaterm(String lemmaterm) {
        this.lemmaterm = lemmaterm;
    }

    public String getDocType() {
        return docType;
    }

    public SourceMed docType(String docType) {
        this.docType = docType;
        return this;
    }

    public void setDocType(String docType) {
        this.docType = docType;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SourceMed sourceMed = (SourceMed) o;
        if (sourceMed.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), sourceMed.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "SourceMed{" +
            "id=" + getId() +
            ", numphrase=" + getNumphrase() +
            ", sentence='" + getSentence() + "'" +
            ", document='" + getDocument() + "'" +
            ", docdate='" + getDocdate() + "'" +
            ", startposition=" + getStartposition() +
            ", endposition=" + getEndposition() +
            ", candidatetermstring='" + getCandidatetermstring() + "'" +
            ", candidateterm='" + getCandidateterm() + "'" +
            ", normalizedterm='" + getNormalizedterm() + "'" +
            ", lemmaterm='" + getLemmaterm() + "'" +
            ", docType='" + getDocType() + "'" +
            "}";
    }
}
