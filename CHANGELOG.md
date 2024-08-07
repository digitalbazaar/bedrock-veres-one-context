# bedrock-veres-one-context ChangeLog

## 16.0.0 - 2024-08-01

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/jsonld-document-loader@5.1.0`.
  - `@bedrock/ledger-context@25`.
- Remove `@bedrock/core` peer dep.
- Update context and test dependencies.
- Use `addDocuments`.

### Fixed
- Add package `files` field.

## 15.0.0 - 2023-09-19

### Changed
- **BREAKING**: Drop support for Node.js < 18.
- **BREAKING**: Update peer deps:
  - Use `@bedrock/jsonld-document-loader@4`.
  - Use `@bedrock/ledger-context@24`.

## 14.0.1 - 2022-04-29

### Fixed
- Fix main entry point.

## 14.0.0 - 2022-04-29

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/core@6`
  - `@bedrock/jsonld-document-loader@3`
  - `@bedrock/ledger-context@23`.

## 13.0.0 - 2022-04-03

### Changed
- **BREAKING**: Rename package to `@bedrock/veres-one-context`.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Remove default export.
- **BREAKING**: Require node 14.x.

### Removed
- **BREAKING**: Remove adding any constants to bedrock config system. If
  constants are needed, import them from `constants` from the underlying
  context modules.

## 12.1.0 - 2022-03-28

### Changed
- Update peer deps:
  - `bedrock@4.5`
  - `bedrock-jsonld-document-loader@1.3`
  - `bedrock-ledger-context@21.1`.
- Update internals to use esm style and use `esm.js` to
  transpile to CommonJS.

## 12.0.0 - 2022-01-21

### Changed
- **BREAKING**: Set engines.node >=12.0.0.
- **BREAKING**: Use bedrock-ledger-context@21.

### Added
- Setup test.

## 11.0.0 - 2021-05-05

### Changed
- **BREAKING**: Use `did-context@3.0`. Context url changed from
  `https://w3id.org/did/v0.11` to `https://www.w3.org/ns/did/v1`.
- Use `veres-one-context@12.0`. Removed prefix/cURI usage.

## 10.0.1 - 2020-06-16

### Changed
- Use peer bedrock-ledger-context@15.

## 10.0.0 - 2019-11-14

### Changed
- **BREAKING**: Use veres-one-context@11.

## 9.0.1 - 2019-11-12

### Fixed
- Specify peer dep bedrock-ledger-context@14.

## 9.0.0 - 2019-11-12

### Changed
- **BREAKING**: Use veres-one-context@10.
- Update dependencies.

## 8.0.0 - 2019-10-22

### Changed
- **BREAKING**: Refactor for use with bedrock@2.

## 7.0.0 - 2019-09-09

### Changed
- **BREAKING**: Replace VERES_ONE_CONTEXT_URL constant with
  VERES_ONE_CONTEXT_V1_URL.
- **BREAKING**: Breaking changes in did-context module update.
- Use did-context@2.
- Use veres-one-context@9.

## 6.0.0 - 2019-01-04

### Added
- DID context.

### Changed
- **BREAKING** Use veres-one-context@8.

## 5.0.0 - 2018-11-06

### Changed
- **BREAKING** Use veres-one-context@7.
- **BREAKING** Remove Continuity2017RecoveryElector.
- **BREAKING** Add maximumElectorCount.

## 4.0.0 - 2018-11-05

### Changed
- **BREAKING** Add Continuity2017 elector terms.

## 3.0.0 - 2018-10-17

### Changed
- Use veres-one-context@5.

## 2.0.0 - 2018-10-11

### Changed
- Use veres-one-context@4.

## 1.0.1 - 2018-10-01

### Changed
- Update bedrock-ledger-context peer dep.

## 1.0.0 - 2018-10-01

- See git history for changes.
