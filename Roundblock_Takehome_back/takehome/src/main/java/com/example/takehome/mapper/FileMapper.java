package com.example.takehome.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import com.example.takehome.entity.File;
@Mapper
public interface FileMapper {
//    @Insert("INSERT INTO zip_files(file_name, content) VALUES (#{fileName}, #{content})")
    void insertZipFile(File file);

    File findLastest();



}

