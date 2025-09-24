import PyPDF2

# Open the PDF file in read-binary mode
with open('yourfile.pdf', 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    raw_text = ''
    for page in reader.pages:
        raw_text += page.extract_text()

print(raw_text)
