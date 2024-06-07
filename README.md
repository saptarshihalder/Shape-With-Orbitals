# Shape-With-Orbitals


# 3D Signal Processing Visualization

This project visualizes the Fourier Transform principles by transforming a 2D drawing into a series of circular orbits. The visualization shows how complex shapes can be decomposed into simpler rotating circles, demonstrating the fundamentals of signal processing.

## Features

- **Interactive Drawing**: Draw shapes directly on the canvas.
- **Fourier Transform**: Decomposes the drawing into rotating circular orbits.
- **Adjustable Orbits**: Use a slider to adjust the number of orbits used in the reconstruction.
- **Color Picker**: Change the color of the orbits.
- **Reset Drawing**: Clear the canvas and start a new drawing.

## Installation

Clone the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/your-repository/3d-signal-processing-visualization.git
cd 3d-signal-processing-visualization
open index.html
```

## Usage

1. Open `index.html` in a web browser.
2. Draw a shape on the canvas by clicking and dragging.
3. Use the slider to adjust the number of orbits in the reconstruction.
4. Change the color of the orbits using the color picker.
5. Click the canvas again to reset and start a new drawing.

## Files

- `index.html`: The main HTML file.
- `style.css`: The CSS file for styling.
- `renderer.js`: The JavaScript file containing the logic for drawing and animating the orbits.
- `page.js`: The JavaScript file containing the logic for handling user interactions.

## Theory

This project demonstrates how the Fourier Transform can be used to decompose complex shapes into simpler components. Each shape drawn on the canvas is treated as a discrete signal in 2D space. The Fourier Transform of this signal breaks it down into a series of rotating circles (orbits), each with a specific frequency, amplitude, and phase.

### Fourier Transform

The Fourier Transform is a mathematical operation that transforms a time-domain signal into its frequency components. It expresses the signal as a sum of sine and cosine functions, each representing a different frequency component of the original signal.

### Application in Code

1. **Drawing Handling**: Captures the user's drawing as a series of points.
2. **Fourier Transform**: Computes the transform of these points to obtain the frequency components.
3. **Animation**: Uses these components to draw and animate rotating circles that reconstruct the original shape.

## License

MIT License

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Creator

Saptarshi Halder
```
