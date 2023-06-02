package com.example.takehome.service;

import com.example.takehome.entity.File;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.List;


public interface FileService {
    void saveZipFile(String fileName, java.io.File file) throws IOException;

    byte[] fetchLatest();
    
}

