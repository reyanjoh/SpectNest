import { useState, useEffect } from "react";
import {
  Dialog,
  Portal,
  Button,
  Grid,
  Input,
  Text,
  Flex,
  FileUpload,
} from "@chakra-ui/react";
import { EmptyProfileIcon } from "@/components/icons/EmptyProfileIcon";

const MAX_FILE_SIZE = 200 * 1024;
const MAX_DIMENSION = 512;

const compressImage = (file: File): Promise<Blob> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(
        1,
        MAX_DIMENSION / Math.max(img.width, img.height),
      );
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas not supported"));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const tryQuality = (quality: number) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error("Compression failed"));
            if (blob.size <= MAX_FILE_SIZE || quality <= 0.3) {
              resolve(blob);
            } else {
              tryQuality(quality - 0.1);
            }
          },
          "image/jpeg",
          quality,
        );
      };
      tryQuality(0.9);
    };
    img.onerror = () => reject(new Error("Invalid image"));
    img.src = URL.createObjectURL(file);
  });

export const NewEmployeeModal = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const compressed = await compressImage(file);
      const objectUrl = URL.createObjectURL(compressed);
      setPreviewUrl(objectUrl);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <Button>Add Employee</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>New Employee</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body gap={1.5} display={"flex"} flexDirection={"column"}>
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Input
                  type="file"
                  display={"none"}
                  id="file-upload"
                  onChange={handleImageChange}
                />
                <label htmlFor="file-upload">
                  <Flex cursor={"pointer"} gap={1}>
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      w="7rem"
                      h="7rem"
                      borderRadius="full"
                      overflow="hidden"
                      border={previewUrl ? "none" : "2px dashed"}
                      borderColor="borderGray.1"
                    >
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          alt="Preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <EmptyProfileIcon height="81" width="81" />
                      )}
                    </Flex>
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Text color={"fontGray.2"} fontSize="sm">
                        Drag image here
                      </Text>
                      <Text color={"fontGray.2"} fontSize="sm">
                        or
                      </Text>
                      <Text color="brand" fontSize="sm">
                        Browse image
                      </Text>
                    </Flex>
                  </Flex>
                </label>
              </Flex>
              {["First Name", "Last Name", "Phone Number", "Position"].map(
                (field) => (
                  <Grid
                    key={field}
                    templateColumns={"1fr 2fr"}
                    alignItems={"center"}
                  >
                    <Text fontSize="sm">{field}</Text>
                    <Input placeholder={field} />
                  </Grid>
                ),
              )}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" px={2}>
                  Discard
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button>Add Employee</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
