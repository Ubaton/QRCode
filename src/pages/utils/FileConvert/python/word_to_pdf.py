from docx2pdf import convert

def convert_word_to_pdf(word_file):
    try:
        # Perform the Word to PDF conversion
        convert(word_file)
    except Exception as e:
        raise e

if __name__ == '__main__':
    # This section is for testing the script separately if needed
    input_word_path = 'path/to/your/input.docx'
    output_pdf_path = 'path/to/your/output.pdf'
    convert_word_to_pdf(input_word_path)
