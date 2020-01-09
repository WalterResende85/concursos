package com.stefanini.concurso.DTO;

import com.stefanini.concurso.model.Candidato;

public class CandidatoDTO {
	private String nome;
	private String cpf;
	private String cidade;
	private Double nota;

	public Candidato tansformarParaCandidatoDTO() {

		return new Candidato(nome, cpf, cidade, nota);
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

	public Double getNota() {
		return nota;
	}

	public void setNota(Double nota) {
		this.nota = nota;
	}

}
