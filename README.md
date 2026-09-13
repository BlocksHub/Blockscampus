<img width="1500" height="375" alt="image" src="https://github.com/user-attachments/assets/3349069b-8511-49ea-9703-590e523abbec" />

<p align="center">A <strong>perfect wrapper</strong> for interacting with <strong>PRONOTE Campus instances.</strong></p>
<p align="center">
  <img src="https://img.shields.io/npm/v/blockshub@blockscampus?color=cb3837" alt="Blocksnote Logo" />
  <img src="https://img.shields.io/badge/PRONOTE_Campus-2026.4.7-fb434f" alt="Blockscampus Logo" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="language"></img>
</p>

> [!IMPORTANT]
> This project is currently in development.

## Compatibility
This wrapper is only compatible with the **student** accounts of PRONOTE Campus.

**Guest space** might be supported in the future, but it is not a priority.

Regarding others PRONOTE Campus accounts (teacher, parent, etc.), they are not supported by this wrapper. Maybe they will be supported in the future, but it is not a priority.

Also, for security reasons, actions regarding the account security (eg. changing password, PIN code, authentication methods, etc.) will **never** be supported by this wrapper. If you wish to change your account security, please use the official PRONOTE Campus website or mobile application.

## Roadmap
Here's the features that are available and planned:
- [ ] Login to PRONOTE Campus instances
    - [ ] Vanilla Login (username + password)
    - [ ] PIN Code verification
    - [ ] SSO Login
    - [ ] Token Refresh and Login (like the mobile app)
- [ ] Timetable
- [ ] Grades
    - [ ] Fetch grades
    - [ ] Grades transcript
    - [ ] Grades report
- [ ] School life
    - [ ] Absences and lateness
- [ ] Lessons
    - [ ] Lessons content
    - [ ] Homework
- [ ] Informations and Surveys
- [ ] Account information

This roadmap will be updated as new features are added or planned.

## Installation
[Bun](https://bun.sh) is recommended for its faster startup time, built-in TypeScript support, and improved performance when handling cryptographic operations and data compression, while remaining fully compatible with Node.js.

### With npm
```bash
npm install @blockshub/blockscampus
```

### With Bun (recommended)
```bash
bun add @blockshub/blockscampus
```

## Documentation
A comprehensive documentation will be available soon.

## Contributing
Please see [CONTRIBUTING](/CONTRIBUTING.md) in the repository for guidelines and best practices.

## License
Blocksnote is licensed under the [MIT License](https://choosealicense.com/licenses/mit/), allowing you to use, modify, and distribute it for both commercial and non-commercial purposes, provided that the license terms are respected. See the [LICENSE](/LICENSE) file for more details.

## Legalities
This project is meant to help users interact with their own data while respecting French software laws ([Article L.122-6-1 of the French Intellectual Property Code](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044365559)). It only does what’s needed to make the software work together with other tools, without copying, sharing, or changing the original software. This analysis is limited to what’s needed for interoperability and isn’t used for anything else.

This wrapper is not affiliated with or endorsed by the PRONOTE Campus developers. It is an independent project created by the community to provide additional functionality and convenience for users of PRONOTE Campus. Therefore, users must using this at their own risk, and the developers of this wrapper cannot be held responsible for any issues that may arise from its use.

For any legal questions or concerns regarding this project, contact: [raphael@papillon.bzh](mailto:raphael@papillon.bzh?subject=%5BBlocksHub%5D%20Legal%20Inquiry%20about%20Blocksnote).

## Credits
- [@noble/ciphers](https://github.com/paulmillr/noble-ciphers) - [MIT License](https://choosealicense.com/licenses/mit/)
- [@noble/hashes](https://github.com/paulmillr/noble-hashes) - [MIT License](https://choosealicense.com/licenses/mit/)
- [micro-rsa-dsa-dh](https://github.com/paulmillr/micro-rsa-dsa-dh) - [MIT License](https://choosealicense.com/licenses/mit/)
