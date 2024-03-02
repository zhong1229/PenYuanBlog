"use client";

import React, { useState } from "react";
import { MdPreview } from "md-editor-rt";

import styles from "./index.module.css";

const MdEditorContent = ({ content }: { content: string }) => {
  const [id] = useState("preview-only");
  return (
    <>
      <MdPreview
        className={styles.preview}
        editorId={id}
        modelValue={content}
      />
    </>
  );
};

export default MdEditorContent;
