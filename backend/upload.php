<?php
$target_dir = "documents/";
$target_file = $target_dir . basename($_FILES["docFile"]["name"]);
$fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Allow certain file formats
if($fileType != "pdf" && $fileType != "doc" && $fileType != "docx") {
    echo "Sorry, only PDF, DOC, & DOCX files are allowed.";
    exit;
}

if (move_uploaded_file($_FILES["docFile"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars(basename($_FILES["docFile"]["name"])). " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}
?>