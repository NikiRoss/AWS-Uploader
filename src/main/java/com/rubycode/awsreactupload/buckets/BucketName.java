package com.rubycode.awsreactupload.buckets;

public enum BucketName {

    PROFILE_IMAGE("rubycode-image-upload-123");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
