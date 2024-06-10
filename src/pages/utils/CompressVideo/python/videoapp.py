from flask import Flask, request, send_from_directory, jsonify
from moviepy.editor import VideoFileClip
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
COMPRESSED_FOLDER = 'compressed'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(COMPRESSED_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return "Video Compression Backend is Running"

@app.route('/compress_video', methods=['POST'])
def compress_video():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filename = secure_filename(file.filename)
    upload_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(upload_path)

    # Compress the video
    compressed_filename = f"compressed_{filename}"
    compressed_path = os.path.join(COMPRESSED_FOLDER, compressed_filename)
    clip = VideoFileClip(upload_path)
    clip.write_videofile(compressed_path, bitrate="250k")

    return jsonify({'download_url': f'/download/{compressed_filename}'})

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(COMPRESSED_FOLDER, filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
