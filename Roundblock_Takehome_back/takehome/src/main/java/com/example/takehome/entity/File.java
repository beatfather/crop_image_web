package com.example.takehome.entity;

import java.util.Arrays;

public class File extends BaseEntity {
    private String fileName;
    private byte[] fileData;



    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }
// getters and setters


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof File file)) return false;
        if (!super.equals(o)) return false;

        if (getFileName() != null ? !getFileName().equals(file.getFileName()) : file.getFileName() != null)
            return false;
        return Arrays.equals(getFileData(), file.getFileData());
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (getFileName() != null ? getFileName().hashCode() : 0);
        result = 31 * result + Arrays.hashCode(getFileData());
        return result;
    }

    @Override
    public String toString() {
        return "File{" +
                "fileName='" + fileName + '\'' +
                ", fileData=" + Arrays.toString(fileData) +
                '}';
    }
}
