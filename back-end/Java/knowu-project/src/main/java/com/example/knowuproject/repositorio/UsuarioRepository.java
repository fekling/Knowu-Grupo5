package com.example.knowuproject.repositorio;

import com.example.knowuproject.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    public List<Usuario> findByUsuario(String Usuario);


}
