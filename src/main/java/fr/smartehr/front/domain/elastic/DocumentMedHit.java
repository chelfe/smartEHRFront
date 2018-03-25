package fr.smartehr.front.domain.elastic;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import fr.smartehr.front.domain.DocumentMed;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DocumentMedHit {

	String _index;
	String _type;
	String _id;
	float _score;
	DocumentMed _source;
	
	
	public String get_index() {
		return _index;
	}
	public void set_index(String _index) {
		this._index = _index;
	}
	public String get_type() {
		return _type;
	}
	public void set_type(String _type) {
		this._type = _type;
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public float get_score() {
		return _score;
	}
	public void set_score(float _score) {
		this._score = _score;
	}
	public DocumentMed get_source() {
		return _source;
	}
	public void set_source(DocumentMed _source) {
		this._source = _source;
	}
	@Override
	public String toString() {
		return "DocumentMedHit [_index=" + _index + ", _type=" + _type + ", _id=" + _id + ", _score=" + _score
				+ ", _source=" + _source + "]";
	}
	
	
	
}
