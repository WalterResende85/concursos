package com.stefanini.concurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stefanini.concurso.model.Candidato;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long> {

}
