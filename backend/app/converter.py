import subprocess
import uuid
import tempfile
import os


def convert_to_docx(text: str):

    temp_dir = tempfile.gettempdir()

    uid = str(uuid.uuid4())

    md_file = os.path.join(temp_dir, f"{uid}.md")
    docx_file = os.path.join(temp_dir, f"{uid}.docx")

    with open(md_file, "w", encoding="utf-8") as f:
        f.write(text)

    subprocess.run([
        "pandoc",
        md_file,
        "-o",
        docx_file
    ], check=True)

    return docx_file