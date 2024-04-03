# Dcard Frontend Intern Homework

[![CodeFactor](https://www.codefactor.io/repository/github/dada878/dcard-homework/badge)](https://www.codefactor.io/repository/github/dada878/dcard-homework)
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

The design draft for this project can be found here: [Figma Draft Link](https://www.figma.com/file/LjOuX1wvS3NSzdnz3Gz0xH/Dcard-Homework?type=design&node-id=0%3A1&mode=design&t=0cq2g0vX29vO9zL7-1)

<img width="920" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/f4a08c93-ce4e-429f-9fa9-e4184edf1ce4">

## Project Structure

### Home Page

This page shown something about the blog me.

<img width="1233" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/b699f783-d2ad-46e8-8d41-f95a839c30f7">

- **\<Navbar/\>**

  - Displays links to navigate to other pages
  - It will be shown on every page

- **\<DarkModeToggle/\>**
  - Toggle dark mode
  - Dark mode preference `saved in local storage`

<img width="1225" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/4113a2b0-4247-4315-a00d-be19596a79ec">

- **\<AboutSection/\>**

  - Show some information about me
  - Cool animation when scrolling to this section

  ![Screen Recording Apr](https://github.com/dada878/dcard-homework/assets/37009584/af1998e2-7652-4620-b469-05ec0c9a336e)

- **\<ProjectCard/\>**
  - Displays information about my side projects
  - Project data stored in a JSON file `content/projects.json`

### Blog List Page

Show the list of posts with categories and tags.

<img width="1058" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/7d5ca002-16b9-47a1-b9ba-24b1541aeadc">

- **\<CategoryItem/\>**
  - Component displaying a category name
  - Clickable to filter posts by category
  - Filter displayed in the URL
  - Uses a **custom hook** `useQueryFilter` to handle query and URL updates easily
- **\<TogglableTagItem\>**
  - Component displaying a tag name
  - Clickable to toggle selected tags to filter posts
  - Filter displayed in the URL
  - Uses a **custom hook** `useQueryFilter` to handle query and URL updates easily
- **\<PostListRender\>**

  - Component to render the post list
  - Implements **infinite scroll** feature to load more posts when scrolling to the bottom

  ![Screen Recording Apr (1)](https://github.com/dada878/dcard-homework/assets/37009584/57b70e88-7321-4e2e-9812-5b8c6a966457)

### Blog View page

Displays the post content and comments.

<img width="1053" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/eb84bf03-caca-44eb-9637-1aa4396902bd">

- **\<DeleteButton/\>**
  - Button to delete the post
  - Visible only to the post owner
  - Shows a confirmation dialog when clicked
- **\<TableOfContent/\>**
  - Component to show the table of contents
  - Automatically generates based on the post content
- **\<MenuItem/\>**
  - Component to show the menu item
  - Clickable to smooth scroll to the content
  - Highlighted when scrolling to the content

<img width="1009" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/4a3ca811-2b29-42c4-a323-a04e39aaeafe">

- **\<CommentSection/\>**

  - Section to show comments
  - Users can add comments when logged in
  - You can add a comment when you are logged in
  - Uses **optimistic updates** to show comments immediately

  ![Screen Recording Apr (2)](https://github.com/dada878/dcard-homework/assets/37009584/c90dd0d1-06f6-476a-a9bb-76f6a1fa6e31)

- **\<TabButton/\>**
  - Button to switch between writing a comment and previewing the comment content

This page also features a link preview when sharing links on social media (other pages also have this feature).

<img width="519" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/92d12fdb-5683-4444-8240-b703722e7017">

### Post Editor page

A page to create or edit a post with markdown content.

<img width="983" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/f5c354d4-933f-43a2-95fb-0d61eaa52aa8">

- **\<MarkdownRender/\>**

  - Component to render markdown content using `react-markdown`
  - Uses **debounce** to render markdown content while the user types, improving performance

  ![Screen Recording Apr (3)](https://github.com/dada878/dcard-homework/assets/37009584/d851d16f-3800-4b6b-9e18-9db01e0948ad)

The mobile UI/UX design of this page is particularly noteworthy.

![Screen Recording](https://github.com/dada878/dcard-homework/assets/37009584/2691b2d9-6cf5-4d0d-9d00-5aee124bff16)

## How To Use

The setup process is a bit complex due to the login feature.

### Step 1. Setup Firebase

Firstly, you need to create a Firebase project following this link: [Firebase Console](https://console.firebase.google.com/u/0/)

![image](https://github.com/dada878/dcard-homework/assets/37009584/2502b5b5-64eb-47eb-b3a3-ff87e8d1e267)

Then, you need to go to Firestore page (you can find it in the left sidebar) and create a database by clicking the "Create database" button.

![image](https://github.com/dada878/dcard-homework/assets/37009584/94fd33f9-622c-4ed2-82c6-2605bb5f9b74)

After that, you need to go to the project settings page and "Service accounts" tab to generate a private key by clicking the "Generate new private key" button. (you can find the button to go to the project settings page on the top of the sidebar).

<img width="843" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/f27bb3d2-c080-4ce3-a01f-65c8596bd1ee">

### Step 2. Create a GitHub OAuth App

Firstly, you need to create a GitHub OAuth App following this link: [GitHub OAuth Apps](https://github.com/settings/applications/new)

<img width="785" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/83153acd-2c4d-4485-9be3-00a82736d3db">

Then, you need to generate a client secret by clicking the "Generate a new client secret" button. (Copy the client ID and client secret to use in the next step)

<img width="1003" alt="image" src="https://github.com/dada878/dcard-homework/assets/37009584/f0f2f730-e37f-48fd-82a9-2a442d373775">

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
# Because the rate limit of GitHub REST API is very low for unauthenticated requests, so we need to use a personal access token to increase the rate limit
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_XXXXXXXXXXXXX

# Secret for NextAuth
# Can generate by `openssl rand -base64 32`
NEXTAUTH_SECRET=XXXXXXXXXXXXXX

# Development URL
NEXTAUTH_URL=http://localhost:3000

# Firebase admin sdk private key (we have generated it in step 1)
FIREBASE_PROJECT_ID=XXXXXXX
FIREBASE_CLIENT_EMAIL=XXXXXXXXX
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nxxx"
```

### Step 4. Run

```bash
npm install
npm run dev
```
