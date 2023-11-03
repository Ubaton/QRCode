from pdf2docx import Converter

def convert_pdf_to_word(pdf_file):
    try:
        # Perform the PDF to Word conversion
        docx_file = Converter(pdf_file).convert()
        docx_file.seek(0)
        return docx_file
    except Exception as e:
        raise e

if __name__ == '__main__':
    # This section is for testing the script separately if needed
    input_pdf_path = 'path/to/your/input.pdf'
    output_docx_path = 'path/to/your/output.docx'
    with open(input_pdf_path, 'rb') as pdf_file:
        converted_file = convert_pdf_to_word(pdf_file)
        with open(output_docx_path, 'wb') as docx_file:
            docx_file.write(converted_file.read())
