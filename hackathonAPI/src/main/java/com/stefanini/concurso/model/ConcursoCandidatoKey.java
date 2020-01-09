package com.stefanini.concurso.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ConcursoCandidatoKey implements Serializable {

	private static final long serialVersionUID = 1L;
	@Column(name = "ID_CANDIDATO")
	private Long idCandidato;
	@Column(name = "ID_CONCURSO")
	private Long idConcurso;

	public ConcursoCandidatoKey() {

	}

	public ConcursoCandidatoKey(Long id_candidato, Long id_Concurso) {
		super();
		this.idCandidato = id_candidato;
		this.idConcurso = id_Concurso;
	}

	

	public Long getIdCandidato() {
		return idCandidato;
	}

	public void setIdCandidato(Long idCandidato) {
		this.idCandidato = idCandidato;
	}

	public Long getIdConcurso() {
		return idConcurso;
	}

	public void setIdConcurso(Long idConcurso) {
		this.idConcurso = idConcurso;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((idConcurso == null) ? 0 : idConcurso.hashCode());
		result = prime * result + ((idCandidato == null) ? 0 : idCandidato.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ConcursoCandidatoKey other = (ConcursoCandidatoKey) obj;
		if (idConcurso == null) {
			if (other.idConcurso != null)
				return false;
		} else if (!idConcurso.equals(other.idConcurso))
			return false;
		if (idCandidato == null) {
			if (other.idCandidato != null)
				return false;
		} else if (!idCandidato.equals(other.idCandidato))
			return false;
		return true;
	}
	

}
