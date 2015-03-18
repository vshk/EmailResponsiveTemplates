# Email Responsive Templates Generator v0.1
> Takes an html file with css link and turns inline. Also Supports responsive css to make sure its inline. This code is specifically targeted on creating responsive email templates.

## Getting Started
Place your Files under src directory
 - index.html
   - CSS (Directory)
   - Images (Directory)
   - JS (Directory - to be suppored in future v0.2)

Once the files are in use the command below to generate your files for production use :
```shell
gulp default
```

Once command goes through you should see your files in below structure :
- Final (Production directory)
  - index.html (All assets minified and compiled to one file)
  - images (final images migrated)
