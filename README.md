<div align="center">

<a href="https://github.com/vaasu2002/snapshot" target="_blank" title="snapshot-cli"><img width="196px" alt="gowebly logo" src="https://raw.githubusercontent.com/gowebly/.github/main/images/gowebly-logo.svg"></a>

<a name="readme-top"></a>

# The Snapshot

Snapshot is a robust library with integrated command-line functionality designed for seamless production-grade database backup and restoration. It supports a wide range of database systems including both MySQL and NoSQL. With features like automatic scheduling, compression, and multi-location storage, **Snapshot** ensures your database is always secure and recoverable.

[![TypeScript version][ts_version_img]][ts_dev_url]  
[![NPM Version][npm_version_img]][npm_url]  
[![License][repo_license_img]][repo_license_url]  

**&searr;&nbsp;&nbsp;The official documentation&nbsp;&nbsp;&swarr;**

[English][docs_url]

**&searr;&nbsp;&nbsp;Share the project's link to your friends&nbsp;&nbsp;&swarr;**

[![Share on X][x_share_img]][x_share_url]
[![Share on Telegram][telegram_share_img]][telegram_share_url]
[![Share on WhatsApp][whatsapp_share_img]][whatsapp_share_url]
[![Share on Reddit][reddit_share_img]][reddit_share_url]

<a href="https://gowebly.org" target="_blank" title="Go to the Gowebly CLI website"><img width="99%" alt="gowebly create command" src="https://raw.githubusercontent.com/gowebly/.github/main/images/gowebly_create.gif"></a>

</div>

## ✨ Features

- Broad compatibility with SQL databases like MySQL, PostgreSQL, SQLite, SQL Server, and more.  
- Support for NoSQL databases, including MongoDB, Cassandra, and Redis.  
- Perform production-ready backups without impacting live systems.  
- Support for full database backups.  
- Incremental backups to save changes since the last backup.  
- Differential backups to save changes since the last full backup.  
- Efficient file compression to reduce storage requirements.  
- Full restoration of entire databases.  
- Selective restoration of specific tables or collections.  
- Easy-to-use command-line interface for backup and restore operations.  

## ⚡️ Quick start
First, make sure you have [Node.js](https://nodejs.org/) installed. Version `16.0.0` (or higher) is required.

You can use **Snapshot** directly without installation by running the following command to initialize a new configuration:

```console
npx snapshot init
```

This command will create a `snapshot` folder in your current directory, containing a `config.json` file. Open the `config.json` file and add the required configuration details, such as database connection URLs, backup type, storage options, and scheduling preferences.

Alternatively, you can install **Snapshot** globally for repeated use:

```console
npm install -g snapshot
```

Once your configuration is set up, import the **Snapshot** library into your application and start the backup process with:

```javascript
const snapshot = require('snapshot');

snapshot.start();
```

This will begin the backup process based on the settings defined in your `config.json`.

That's it! 🎉 **Snapshot** is now actively managing your database backups and ensuring your data is secure.


### 👩‍💻👨‍💻 Contribute to the project

If you want to contribute to the project, please read the [contributing guide](https://github.com/vaasu2002/snapshot/blob/main/CONTRIBUTING.md) first.


## ⚠️ License  

[`Snapshot`][repo_url] is free and open-source software licensed under the [GNU General Public License v3.0][repo_license_url], created and supported with ❤️ for developers and database enthusiasts.  

The GNU General Public License ensures that this software remains free for all users, with the freedom to use, modify, and distribute under the same license.  

For more details, see the full [GPL-3.0 License text][repo_license_url].  

<!-- Ts links -->

[ts_url]: https://www.typescriptlang.org/  
[ts_download_url]: https://www.typescriptlang.org/download  
[ts_run_url]: https://www.typescriptlang.org/docs/handbook/compiler-options.html  
[ts_install_url]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html  
[ts_dev_url]: https://www.typescriptlang.org/docs/  
[ts_version_img]: https://img.shields.io/badge/TypeScript-4.9+-3178C6?style=for-the-badge&logo=typescript  
[npm_url]: https://www.npmjs.com/  
[npm_version_img]: https://img.shields.io/npm/v/snapshot-db?style=for-the-badge&logo=npm  
[repo_license_url]: ./LICENSE  
[repo_license_img]: https://img.shields.io/badge/License-MIT-green?style=for-the-badge  


<!-- Social links -->

[boosty_url]: https://boosty.to/koddr/donate
[dev_to_url]: https://dev.to
[medium_url]: https://medium.com
[habr_url]: https://habr.com
[x_share_url]: https://x.com/intent/tweet?hashtags=snapshot%2Cbackup%2Cdatabase&text=Snapshot%20is%20a%20powerful%20library%20for%20production-grade%20database%20backup%20and%20restoration.%20It%20supports%20SQL%20%26%20NoSQL%20databases%20with%20features%20like%20scheduling%2C%20compression%2C%20and%20multi-location%20storage.&url=https%3A%2F%2Fgithub.com%2Fvaasu2002%2Fsnapshot  
[telegram_share_url]: https://t.me/share/url?text=Snapshot%20is%20a%20powerful%20library%20for%20production-grade%20database%20backup%20and%20restoration.%20It%20supports%20SQL%20%26%20NoSQL%20databases%20with%20features%20like%20scheduling%2C%20compression%2C%20and%20multi-location%20storage.%20%23snapshot%20%23backup%20%23database&url=https%3A%2F%2Fgithub.com%2Fvaasu2002%2Fsnapshot  
[whatsapp_share_url]: https://api.whatsapp.com/send?text=Snapshot%20is%20a%20powerful%20library%20for%20production-grade%20database%20backup%20and%20restoration.%20It%20supports%20SQL%20%26%20NoSQL%20databases%20with%20features%20like%20scheduling%2C%20compression%2C%20and%20multi-location%20storage.%20https%3A%2F%2Fgithub.com%2Fvaasu2002%2Fsnapshot  
[reddit_share_url]: https://www.reddit.com/submit?title=Snapshot%20is%20a%20powerful%20library%20for%20production-grade%20database%20backup%20and%20restoration.%20It%20supports%20SQL%20%26%20NoSQL%20databases%20with%20features%20like%20scheduling%2C%20compression%2C%20and%20multi-location%20storage.%20%23snapshot%20%23backup%20%23database&url=https%3A%2F%2Fgithub.com%2Fvaasu2002%2Fsnapshot  

[x_share_img]: https://img.shields.io/badge/x_(twitter)-black?style=for-the-badge&logo=x
[telegram_share_img]: https://img.shields.io/badge/telegram-black?style=for-the-badge&logo=telegram
[whatsapp_share_img]: https://img.shields.io/badge/whatsapp-black?style=for-the-badge&logo=whatsapp
[reddit_share_img]: https://img.shields.io/badge/reddit-black?style=for-the-badge&logo=reddit

[docs_url]: https://github.com/vaasu2002/snapshot

[repo_url]: https://github.com/vaasu2002/snapshot 