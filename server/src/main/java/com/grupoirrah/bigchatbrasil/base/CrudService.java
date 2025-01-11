package com.grupoirrah.bigchatbrasil.base;


import com.grupoirrah.bigchatbrasil.base.restexceptions.EntityNotFoundException;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import java.io.Serializable;

public class CrudService<E extends PersistentEntity<ID>, ID extends Serializable> {

    @Autowired
    private CrudRepository<E, ID> repository;

    @Autowired
    private EntityManager entityManager;

    public E findById(ID id){
        return this.repository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Não encontrado dados para o ID " + id));
    }

    public Page<E> findAll(E entity, Pageable pageable){
        return this.repository.findAll((Specification<E>) entity.toSpecification(), pageable);
    }

    public E save(E entity){

        if(!entity.isNew()){
            throw new RuntimeException("Já existe registro com esse ID");
        }

        entity = this.beforeSave(entity);
        entity = this.doSave(entity);
        this.afterSave(entity);
        return entity;
    }

    public E update(ID id, E entity){

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
    public E beforeSave(E entity){return entity;}

    public E afterSave(E entity){return entity;}

    public E beforeUpdate(E entity){return entity;}

    public E afterUpdate(E entity){return entity;}

    public E beforeDelete(E entity){return entity;}

    public E afterDelete(E entity){return entity;}


}
