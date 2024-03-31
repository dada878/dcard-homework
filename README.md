# Dcard Frontend Intern Homework
![GitHub deployments](https://img.shields.io/github/deployments/dada878/dcard-homework/production?logo=vercel&label=vercel)
![GitHub](https://img.shields.io/github/license/dada878/dcard-homework)
![GitHub repo size](https://img.shields.io/github/repo-size/dada878/dcard-homework)
## Introduction
Dada's Blog (Dcard Frontend Intern Homework) is a simple blog website that allows visitors to view posts, and owner to create, edit, and delete posts. All the posts are stored in a GitHub repository issues.

## Demo
[Check it out](https://dcard-homework-tawny.vercel.app)
## Screenshots
<table>
    <tr>
        <td>
    <img width="1248" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/e548565a-da8d-4f2d-8153-b9477409f2f5">        
        </td>
    </tr>
</table>
<table>
    <tr>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/eebcc762-c910-4564-8167-f884099852b0"></td>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/6a6049f2-d6c0-4c5e-be83-2ed2b7035fc3"></td>
    </tr>
    <tr>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/fd974454-0cc0-493d-8c65-a91a54a151e9"></td>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/ad8e235a-c49f-4700-92cf-7d048d01b1ec"></td>
    </tr>
</table>
<table>
    <tr>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/df04a881-030f-425d-a5a1-4d4868627485"></td>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/c68baffe-3a19-4297-91e1-526a4d44a327"></td>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/dd71caee-4f1b-44af-9839-6f2432c10c95"></td>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/d20a7481-c74c-4375-845b-703ff98ba3bd"></td>
    </tr>
    <tr>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/51b9581e-4354-42cd-b6b9-1f21b6bae2d5"></td>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/30629948-c337-4ee1-8773-e95ebd87ddb0"></td>
        <td><img alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/367b2200-d02f-4f9d-8301-9194ec98ef12"></td>
    </tr>
</table>

## Tech Stack
- Tailwind CSS
- React.js
- Next.js
- Typescript

## Design
The design draft for this project :) \
[Figma Draft Link](https://www.figma.com/file/LjOuX1wvS3NSzdnz3Gz0xH/Dcard-Homework?type=design&node-id=0%3A1&mode=design&t=0cq2g0vX29vO9zL7-1)

<img width="920" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/f4a08c93-ce4e-429f-9fa9-e4184edf1ce4">

## Lighthouse

<img width="416" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/bdcf767a-34ab-413e-94fa-c3957426d373">

## Commit message

<img width="1216" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/6ab8a534-e167-4cf8-999e-136340d244f7">

## SEO Friendly
<img width="519" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/92d12fdb-5683-4444-8240-b703722e7017">

## Project Structure
### Home Page
This page shown something about the blog and the author.

<img width="1233" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/b699f783-d2ad-46e8-8d41-f95a839c30f7">

<img width="1225" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/4113a2b0-4247-4315-a00d-be19596a79ec">

- **\<Navbar/\>**
    - Show some links to navigate to other pages
- **\<NavbarItem/\>**
    - A component with just a link and some styles
- **\<DarkModeToggle/\>**
    - Toggle the dark mode
    - The dark mode will be saved in the local storage
- **\<AboutSection/\>**
    - Show some information about me
- **\<ProjectCard/\>**
    - Show some information about my side projects

### Blog List Page

<img width="1058" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/7d5ca002-16b9-47a1-b9ba-24b1541aeadc">

- **\<FixedSidebar/\>**
    - A sidebar that will be fixed when scrolling
- **\<LinkButton/\>**
    - A button with a link
- **\<CategoryItem/\>**
    - A component with a category name
    - You can click it to filter posts by category
    - The filter will be shown in the URL
- **\<TogglableTagItem\>**
    - A component with a tag name
    - You can click it to toggle selected tags to filter posts
    - The filter will be shown in the URL
- **\<PostListRender\>**
    - A component to render the post list
    - When scrolling to the bottom, it will load more posts until there are no more posts
- **\<BlogPost/\>**
    - A component to show the post
    - You can click the post to view the post detail
### Blog View page

<img width="1053" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/eb84bf03-caca-44eb-9637-1aa4396902bd">

<img width="1009" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/4a3ca811-2b29-42c4-a323-a04e39aaeafe">

- **\<DeleteButton/\>**
    - A button to delete the post
    - Only the post owner can see and use this button
    - When clicking it, it will show a confirmation dialog
- **\<TableOfContent/\>**
    - A component to show the table of content
    - It will automatically generate the table of content based on the post content
- **\<MenuItem/\>**
    - A component to show the menu item
    - You can click it to smooth scroll to the content
    - It will be highlighted when scrolling to the content
- **\<ContentRender/\>**
    - A component to render the post content, including the title, tags, date, and content

- **\<CommentSection/\>**
    - A section to show the comments
    - You can add a comment when you are logged in
    - It's use optimistic updates to show the comment immediately
- **\<BlogComment/\>**
    - A component to show the comment
- **\<CommentEditor/\>**
    - A component to edit the comment
- **\<TabButton/\>**
    - A button to switch between writing a comment and previewing the comment content
- **\<Button/\>**
    - A button with some styles

### Post Editor page

<img width="983" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/f5c354d4-933f-43a2-95fb-0d61eaa52aa8">

- **\<Input/\>**
    - A component to input text
- **\<Textarea/\>**
    - A component to input a long text
- **\<MarkdownRender/\>**
    - A component to render the markdown content with `react-markdown`
    - It uses **debounce** to render the markdown content when the user is typing to improve performance

## How To Use

### Step 1. Create Firebase

### Step 2 Create a GitHub OAuth App

### Step 3. Configuration

In the `.env` file:

```dotenv
# Github Repo you want to store posts data
# GITHUB_REPO_OWNER is also used to check permissions to create/edit posts
GITHUB_REPO_OWNER=dada878
GITHUB_REPO_NAME=dcard-homework

# BASE_URL is for development mode, and PRODUCTION_URL is for production mode
BASE_URL=http://localhost:3000
PRODUCTION_URL=https://dcard-homework-tawny.vercel.app

# Firebase configuration
FIREBASE_PUBLIC_API_KEY=AIzaSyBoE6YObSJYD-N8mi1CYFjFjoWV4rTqVOU
FIREBASE_AUTH_DOMAIN=dcard-homework.firebaseapp.com
FIREBASE_PROJECT_ID=dcard-homework
FIREBASE_STORAGE_BUCKET=dcard-homework.appspot.com
FIREBASE_MESSAGING_SENDER_ID=822235578246
FIREBASE_APP_ID=1:822235578246:web:0ca9f1ccfe88f16ad77607
```

In the .env.local file:
```dotenv
# Github OAuth service setup
GITHUB_APP_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXX
GITHUB_APP_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXX

# Personal access token for GitHub
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_XXXXXXXXXXXXX

# Secret for NextAuth
# Can generate by `openssl rand -base64 32`
NEXTAUTH_SECRET=XXXXXXXXXXXXXX

# Development URL
NEXTAUTH_URL=http://localhost:3000

# Firebase admin config
FIREBASE_PROJECT_ID=XXXXXXX
FIREBASE_CLIENT_EMAIL=XXXXXXXXX
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nxxx"
```

### Step 4. Run
```bash
npm install
npm run dev
```
