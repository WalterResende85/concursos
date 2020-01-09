package com.stefanini.concurso.DTO;

import com.stefanini.concurso.model.ConcursoCandidato;
import com.stefanini.concurso.model.ConcursoCandidatoKey;

public class ConcursoCandidatoDTO {
	private Long idCandidato;
	private String nomeCandidato;
	private String cpf;
	private String cidade;
	private Long idConcurso;
	private String nomeConcurso;
	private Integer quatidadeVagas;
	private Double nota;

	public ConcursoCandidatoDTO(Long idCandidato, String nomeCandidato, String cpf, String cidade, Long idConcurso,
			String nomeConcurso, Integer quatidadeVagas, Double nota) {
		super();
		this.idCandidato = idCandidato;
		this.nomeCandidato = nomeCandidato;
		this.cpf = cpf;
		this.cidade = cidade;
		this.idConcurso = idConcurso;
		this.nomeConcurso = nomeConcurso;
		this.quatidadeVagas = quatidadeVagas;
		this.nota = nota;
	}

	public ConcursoCandidatoDTO(Long idCandidato, Long idConcurso, Double nota) {
		super();
		this.idCandidato = idCandidato;
		this.idConcurso = idConcurso;
		this.nota = nota;
	}

	public ConcursoCandidatoDTO(Long idCandidato, Long idConcurso) {
		super();
		this.idCandidato = idCandidato;
		this.idConcurso = idConcurso;
	}

	public ConcursoCandidatoDTO(Double nota) {
		super();
		this.nota = nota;
	}

	public ConcursoCandidatoDTO() {
		super();
	}

	public ConcursoCandidato tansformarParaEntidade() {
		return new ConcursoCandidato(new ConcursoCandidatoKey(this.idCandidato, this.idConcurso), this.nota);
	}

	public Long getIdCandidato() {
		return idCandidato;
	}

	public void setIdCandidato(Long idCandidato) {
		this.idCandidato = idCandidato;
	}

	public String getNomeCandidato() {
		return nomeCandidato;
	}

	public void setNomeCandidato(String nomeCandidato) {
		this.nomeCandidato = nomeCandidato;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public Long getIdConcurso() {
		return idConcurso;
	}

	public void setIdConcurso(Long idConcurso) {
		this.idConcurso = idConcurso;
	}

	public String getNomeConcurso() {
		return nomeConcurso;
	}

	public void setNomeConcurso(String nomeConcurso) {
		this.nomeConcurso = nomeConcurso;
	}

	public Integer getQuatidadeVagas() {
		return quatidadeVagas;
	}

	public void setQuatidadeVagas(Integer quatidadeVagas) {
		this.quatidadeVagas = quatidadeVagas;
	}

	public Double getNota() {
		return nota;
	}

	public void setNota(Double nota) {
		this.nota = nota;
	}

}
