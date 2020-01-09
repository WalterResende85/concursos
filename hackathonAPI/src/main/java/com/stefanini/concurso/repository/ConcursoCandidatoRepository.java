package com.stefanini.concurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.stefanini.concurso.DTO.ConcursoCandidatoDTO;
import com.stefanini.concurso.model.ConcursoCandidato;
import com.stefanini.concurso.model.ConcursoCandidatoKey;

@Repository
public interface ConcursoCandidatoRepository extends JpaRepository<ConcursoCandidato, ConcursoCandidatoKey> {

	@Query("SELECT new com.stefanini.concurso.DTO.ConcursoCandidatoDTO"
			+ "(ca.id, ca.nome, ca.cpf, ca.cidade, co.id, co.nome, co.quantidadeVagas, cc.nota)"
			+ " FROM ConcursoCandidato cc " + "JOIN Candidato ca ON ca.id = cc.concursoCandidatoKey.idCandidato  "
			+ "JOIN Concurso co ON co.id = cc.concursoCandidatoKey.idConcurso")
	Iterable<ConcursoCandidatoDTO> buscarTodos();

	@Query("SELECT new com.stefanini.concurso.DTO.ConcursoCandidatoDTO"
			+ "(ca.id, ca.nome, ca.cpf, ca.cidade, co.id, co.nome, co.quantidadeVagas, cc.nota)"
			+ " FROM ConcursoCandidato cc " + "JOIN Candidato ca ON ca.id = cc.concursoCandidatoKey.idCandidato  "
			+ "JOIN Concurso co ON co.id = cc.concursoCandidatoKey.idConcurso "
			+ "where cc.concursoCandidatoKey.idConcurso = ?1")
	Iterable<ConcursoCandidatoDTO> buscarCandidatosPorConcurso(Long id);

	Iterable<ConcursoCandidato> findByConcursoCandidatoKeyIdConcurso(Long idConcurso);

	Iterable<ConcursoCandidato> findByConcursoCandidatoKeyIdCandidato(Long idCandidato);

}
