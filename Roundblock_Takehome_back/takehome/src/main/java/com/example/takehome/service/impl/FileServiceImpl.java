package com.example.takehome.service.impl;

import com.example.takehome.mapper.FileMapper;
import com.example.takehome.service.FileService;
import com.example.takehome.entity.File;
import com.example.takehome.service.ex.DownloadException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.sql.Blob;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import javax.sql.DataSource;
import java.util.Date;

@Service
public class FileServiceImpl implements FileService {
    @Autowired
    private FileMapper fileMapper;

    @Autowired
    private DataSource dataSource;

    @Override
    public void saveZipFile(String fileName, java.io.File tempFile) throws IOException {
        byte[] fileContent = Files.readAllBytes(tempFile.toPath());
        File file = new File();
        file.setFileName(fileName);
        file.setFileData(fileContent);

        file.setCreatedTime(new Date());
        fileMapper.insertZipFile(file);
    }

    @Override
    public byte[] fetchLatest() {
        File result = fileMapper.findLastest();
        if (result == null) {
            throw new DownloadException("数据库为空，无法下载");
        }
        byte[] file = result.getFileData();
        return file;
    }
}

