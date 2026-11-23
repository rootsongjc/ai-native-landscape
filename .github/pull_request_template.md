## Summary

-

## Checklist

For a new project (see the [inclusion standards](https://landscape.jimmysong.io/methodology/)):

- [ ] The repository is public, not a fork, not archived, and has an open source license.
- [ ] It has at least 200 stars, is at least 60 days old, and has a commit in the last 90 days.
- [ ] It is not already listed.
- [ ] This PR only adds `data/projects/<slug>.en.md` and `data/projects/<slug>.zh.md`.

For any data change:

- [ ] `category` and `subCategory` are valid keys from `data/categories.yaml`.
- [ ] `description` is a plain string in each file: English in `.en.md`, Chinese in `.zh.md`.
- [ ] `npm run build` passes (it runs validation).
