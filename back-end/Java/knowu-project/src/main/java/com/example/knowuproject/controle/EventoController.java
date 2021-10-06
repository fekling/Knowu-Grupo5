package com.example.knowuproject.controle;

import com.example.knowuproject.modelo.Evento;
import com.example.knowuproject.repositorio.EventoRepository;
import com.example.knowuproject.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/evento")
public class EventoController {

    @Autowired
    EventoRepository eventoRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping("/criar/{id}")
    public ResponseEntity criarEvento(@PathVariable Integer id, @RequestBody Evento evento) {

        evento.setUsuario(usuarioRepository.findById(id));
        eventoRepository.save(evento);
        return ResponseEntity.status(201).build();

    }

    @GetMapping("/todos")
    public ResponseEntity buscarEvento(){
        return ResponseEntity.status(200).body(eventoRepository.findAll());
    }

    @PatchMapping("/atualizarDadosEvento/{id}")
    public ResponseEntity atualizarEvento(@PathVariable Integer id, @RequestBody Evento evento){

        Evento dadosEvento = evento;
        Optional<Evento> dados = eventoRepository.findById(id);
        Evento dadosOriginais = dados.get();

        if (evento.getNome() != null){
            dadosOriginais.setNome(dadosEvento.getNome());
        }
        if (evento.getDescricao() != null){
            dadosOriginais.setDescricao(dadosEvento.getDescricao());
        }
        if (evento.getDataInicio() != null){
            dadosOriginais.setDataInicio(dadosEvento.getDataInicio());
        }
        if (evento.getDataFim() != null){
            dadosOriginais.setDataFim(dadosEvento.getDataFim());
        }

        dadosOriginais.setIdEvento(id);
        eventoRepository.save(dadosOriginais);

        return ResponseEntity.status(200).build();

    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity excluirEvento(@PathVariable Integer id){

        if(eventoRepository.existsById(id)){
            eventoRepository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(204).build();
    }

}
