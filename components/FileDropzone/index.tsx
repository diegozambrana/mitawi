import React, { useState } from "react";
import {
  useMantineTheme,
  Group,
  Text,
  useMantineColorScheme,
  rem,
} from "@mantine/core";
import { useDropzone } from "react-dropzone";
import { IconUpload, IconFile } from "@tabler/icons-react";

interface FileDropzoneProps {
  onFileUpload?: (files: File[]) => void;
}

export const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileUpload }) => {
  const [files, setFiles] = useState<File[]>([]);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    if (onFileUpload) {
      onFileUpload(acceptedFiles);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [],
        "application/pdf": [],
      },
    });

  return (
    <div
      {...getRootProps()}
      style={{
        border: `2px dashed ${
          isDragReject
            ? theme.colors.red[6]
            : isDragActive
            ? theme.colors.blue[6]
            : theme.colors.gray[6]
        }`,
        padding: rem(20),
        borderRadius: rem(8),
        textAlign: "center",
        backgroundColor:
          colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
    >
      <input {...getInputProps()} />
      <Group>
        {isDragActive ? (
          <IconUpload size={rem(50)} color={theme.colors.blue[6]} />
        ) : (
          <IconFile size={rem(50)} color={theme.colors.gray[6]} />
        )}
      </Group>
      <Text size="sm" mt="sm" color={isDragReject ? "red" : "dimmed"}>
        {isDragReject
          ? "Archivo no soportado"
          : "Arrastra tu archivo aquí o haz clic para seleccionar"}
      </Text>

      {files.length > 0 && (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <Text size="sm">{file.name}</Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
