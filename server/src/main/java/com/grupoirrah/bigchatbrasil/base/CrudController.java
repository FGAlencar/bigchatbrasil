package com.grupoirrah.bigchatbrasil.base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;

public class CrudController<E extends PersistentEntity<ID>, ID extends Serializable>{
    @Autowired
    private CrudService<E, ID> service;

    @GetMapping
    public ResponseEntity<PagedModel<E>> readAll(E entity, Pageable pageable){
        PagedModel<E> clientes = this.service.findAll(entity, pageable);
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<E> readOne(@PathVariable("id") ID id){
        E cliente = this.service.findById(id);
        return ResponseEntity.ok(cliente);
    }

    @PostMapping
    public ResponseEntity<E> create(@RequestBody E request ){
        E entity = this.service.save(request);
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<E> update(@PathVariable ID id,
                                    @RequestBody E request){
        E entity = this.service.update(id, request);
        return ResponseEntity.ok(entity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<E> delete(@PathVariable ID id){
        this.service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
