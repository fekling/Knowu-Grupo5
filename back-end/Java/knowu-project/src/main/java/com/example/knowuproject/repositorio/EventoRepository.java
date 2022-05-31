package com.example.knowuproject.repositorio;

import com.example.knowuproject.modelo.Evento;
import com.example.knowuproject.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EventoRepository extends JpaRepository<Evento, Integer> {

    @Query("SELECT ev FROM Evento ev WHERE ev.idEvento = ?1 AND ev.usuario.idUsuario = ?2")
    Usuario findByUsuario(Integer idEvento, Integer idUsuario);
}
