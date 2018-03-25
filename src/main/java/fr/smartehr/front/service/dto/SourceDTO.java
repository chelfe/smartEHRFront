package fr.smartehr.front.service.dto;


import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Source entity.
 */
public class SourceDTO implements Serializable {

    private Long id;

    private Integer numphrase;

    private String sentence;

    private String document;

    private String docdate;

    private Integer startposition;

    private Integer endposition;

    private String candidatetermstring;

    private String candidateterm;

    private String normalizedterm;

    private String lemmaterm;

    private String docType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getDocdate() {
        return docdate;
    }

    public void setDocdate(String docdate) {
        this.docdate = docdate;
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

    public String getDocType() {
        return docType;
    }

    public void setDocType(String docType) {
        this.docType = docType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        SourceDTO sourceDTO = (SourceDTO) o;
        if(sourceDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), sourceDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "SourceDTO{" +
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
