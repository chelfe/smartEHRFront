package fr.smartehr.front.service.dto;


import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A DTO for the DocumentMed entity.
 */
public class DocumentMedDTO implements Serializable {

    private Long id;

    private String index;

    private String type;

    private Float score;

    private Long sourceId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Float getScore() {
        return score;
    }

    public void setScore(Float score) {
        this.score = score;
    }

    public Long getSourceId() {
        return sourceId;
    }

    public void setSourceId(Long sourceMedId) {
        this.sourceId = sourceMedId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        DocumentMedDTO documentMedDTO = (DocumentMedDTO) o;
        if(documentMedDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), documentMedDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "DocumentMedDTO{" +
            "id=" + getId() +
            ", index='" + getIndex() + "'" +
            ", type='" + getType() + "'" +
            ", score=" + getScore() +
            "}";
    }
}
