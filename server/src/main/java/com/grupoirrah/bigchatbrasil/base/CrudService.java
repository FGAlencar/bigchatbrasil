package com.grupoirrah.bigchatbrasil.base;


import com.grupoirrah.bigchatbrasil.base.restexceptions.EntityNotFoundException;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;

import java.io.Serializable;

public class CrudService<E extends PersistentEntity<ID>, ID extends Serializable> {

    @Autowired
    private CrudRepository<E, ID> repository;

    @Autowired
    protected EntityManager entityManager;

    public E findById(ID id){
        return this.repository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Não encontrado dados para o ID " + id));
    }

    public PagedModel<E> findAll(E entity, Pageable pageable){
        Page<E> page = this.repository.findAll(Example.of(entity), pageable);
        return new PagedModel<>(page);
    }

    public E save(E entity){

        if(!entity.isNew()){
            return this.update(entity.getId(), entity);
        }

        entity = this.beforeSave(entity);
        entity = this.doSave(entity);
        this.afterSave(entity);
        return entity;
    }

    public E update(ID id, E entity){
        boolean exists = this.repository.existsById(id);
        if(!exists){
            throw  new RuntimeException("Não encontrado dados para o ID " + id);
        }

        if(!id.equals(entity.getId())){
            throw  new RuntimeException("ID informado não se refere aos dados a serem atualizados");
        }

        entity = this.beforeUpdate(entity);
        entity = this.doSave(entity);
        this.afterUpdate(entity);
        return entity;
    }

    public void deleteById(ID id){
        E entity = this.findById(id);
        entity = this.beforeDelete(entity);
        this.doDelete(entity);
        this.afterDelete(entity);
    }

    private E doSave(E entity){
        return this.repository.save(entity);
    }

    private void doDelete(E entity){
        this.repository.deleteById(entity.getId());
    }


    //métodos dedicados para services filhas
    protected E beforeSave(E entity){return entity;}

    protected void afterSave(E entity){}

    protected E beforeUpdate(E entity){return entity;}

    protected void afterUpdate(E entity){}

    protected E beforeDelete(E entity){return entity;}

    protected void afterDelete(E entity){}


}
