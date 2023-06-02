package com.example.takehome.entity;

import java.io.Serializable;
import java.util.Date;


public class BaseEntity implements Serializable {

    private Date createdTime;

/**
 * get,set
 * equals和hashCode
 * toString
 */
    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    private Integer id;

    public Integer getId() {
        return id;
    }

    @Override
    public String toString() {
        return "BaseEntity{" +
                "createdTime=" + createdTime +
                ", id=" + id +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof BaseEntity that)) return false;

        if (getCreatedTime() != null ? !getCreatedTime().equals(that.getCreatedTime()) : that.getCreatedTime() != null)
            return false;
        return getId() != null ? getId().equals(that.getId()) : that.getId() == null;
    }

    @Override
    public int hashCode() {
        int result = getCreatedTime() != null ? getCreatedTime().hashCode() : 0;
        result = 31 * result + (getId() != null ? getId().hashCode() : 0);
        return result;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}

