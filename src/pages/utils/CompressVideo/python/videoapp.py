from flask import Flask, request, jsonify, send_file
from converter import Converter
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/compress_video', methods=['POST'])
def compress_video():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"})

    video_file = request.files['file']

    if video_file.filename == '':
        return jsonify({"error": "No selected file"})

    # Define the output filename for the compressed video
    output_filename = "compressed_video.mp4"

    try:
        # Perform video compression using PythonVideoConverter
        converter = Converter()
        converter.convert(video_file, output_filename)

        # You can perform additional operations here if needed

        # Return the path to the compressed video for download
        return send_file(output_filename, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
