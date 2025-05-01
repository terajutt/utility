# UtilityX - Multi-tool Utility Website

A responsive multi-tool utility website with calculators, converters, and generators built with React, TypeScript, and Tailwind CSS.

## Features

- GST Calculator
- Standard Calculator
- BMI Calculator 
- Age Calculator
- QR Code Generator
- Link Shortener
- Text Tools (case converter, word counter)
- Unit Converter (length, weight, temperature)

## Deployment Instructions for Render

1. Sign up for a [Render](https://render.com/) account if you don't have one
2. Click "New" and select "Web Service"
3. Connect your GitHub repository or upload the project files
4. Configure the following settings:
   - **Name**: utility-tools-website (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Under "Advanced", add the following environment variable:
   - Key: `NODE_ENV` Value: `production`
6. Select the "Free" plan and click "Create Web Service"

Alternatively, if you've included the `render.yaml` file in your repository, you can use Render Blueprints for deployment:

1. Click on "Blueprints" in the Render dashboard
2. Connect your repository
3. Render will detect the render.yaml file and set up your services automatically

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Express.js