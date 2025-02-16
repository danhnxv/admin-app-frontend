<h1 align='center'>Admin App Frontend</h1>

## **Install 📦**

1. Clone Template

```
git clone <repo-link>
```

2. Install Packages

```
pnpm install
```

3. Start Project

```
pnpm dev
```

<br/><br/>

## **Options ✍️**

1. Check lint

```
pnpm lint
```

2. Fix lint

```
pnpm lint:fix
```

3. Check prettier

```
pnpm prettier
```

4. Fix prettier

```
pnpm prettier:fix
```

5. Fix lint and prettier

```
pnpm format
```

## **Folder Structure**

```sh
messages              # multilingual
|
public
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
                      # if assets is common for all section, all assets will be saved in top-level public folder
                      # if assets is only used for specific section, all assets will be saved in that section folder in the assets folder
                      # example: asset of components folder in src. will be saved in public\assets\components\InputGroup\eye-off.svg
src
|
+-- app               # all page of the application
|
+-- screens             # will contain page component and Each page component will be responsible for handling different types of membership.
|                     # example : screens/home => home/diamond or home/standard
+-- components        # shared components used across the entire application
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- stores            # global state stores
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

- With the folder division for each membership tier, each feature still retains its current structure, but within each section, there will be additional folders to cater to different types of members

- Name for variables : camelCase type
  example : areEqual , hasEncryption …

- Name for Class/interface/types/enum/functions components/Name of Folder Component: PascalCase type
  example : SoftwareDeveloper …

- Should define enum endpoints for routes

- Create a new one folder and file :

  - Create a new folder by name of Component after that create index.tsx file to contain main component
    example : Header/index.tsx

- In folder contain many sub folders/files need to export them to top level folder

- Name for Folder : kebab-case type
  example : components , views, …

- Wrap all of functions handling into custom hook

- Write down comments code for each function/ component

- Clean up code : remove unused functions/ variables / imports , format prettier before pushing code.

- format commit should be "(story/bug)-(code) : (subject)"

Read more about rules [here](https://github.com/alan2207/bulletproof-react).

- Run this command to get Husky working on ubuntu

```
chmod ug+x .husky/*
```

## Environment variables:

Replace .env.example => .env
