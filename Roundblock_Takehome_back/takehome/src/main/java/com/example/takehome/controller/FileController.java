package com.example.takehome.controller;

import com.example.takehome.service.FileService;
import com.example.takehome.entity.File;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import org.springframework.http.HttpHeaders;

@RestController
@RequestMapping("files")
public class FileController extends BaseController{
    @Autowired
    private FileService fileService;

    @PostMapping("upload")
    public String uploadZipFile(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        java.io.File tempFile = java.io.File.createTempFile("zip-", ".zip");
        multipartFile.transferTo(tempFile);

        String fileName = multipartFile.getOriginalFilename();

        fileService.saveZipFile(fileName, tempFile);

        return "File uploaded and saved in the database successfully!";
    }

    @GetMapping("download")
    public ResponseEntity<ByteArrayResource> downloadLatestFile() throws IOException {
        byte[] file = fileService.fetchLatest();
    
        if (file != null) {
            ByteArrayResource resource = new ByteArrayResource(file);
    
            HttpHeaders headers = new HttpHeaders();
            // Set "example.zip" as the default filename or use a dynamic name based on your requirements
            headers.setContentDisposition(ContentDisposition.builder("attachment").filename("example.zip").build());
    
            return ResponseEntity.ok()
                    .headers(headers)
                    .contentLength(resource.contentLength())
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(resource);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    
    
    
}


