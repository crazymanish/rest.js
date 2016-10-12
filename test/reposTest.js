/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <info@mikedeboer.nl>
 */

"use strict";

var Assert = require("assert");
var Client = require("./../lib/index");
var testAuth = require("./../testAuth.json");

describe("[repos]", function() {
    var client;
    var token = testAuth["token"];

    beforeEach(function() {
        client = new Client();
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute PUT /repos/:owner/:repo/collaborators/:collabuser (addCollaborator)",  function(next) {
        client.repos.addCollaborator(
            {
                owner: "String",
                repo: "String",
                collabuser: "String",
                permission: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts (addProtectedBranchRequiredStatusChecksContexts)",  function(next) {
        client.repos.addProtectedBranchRequiredStatusChecksContexts(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                body: "Array",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams (addProtectedBranchTeamRestrictions)",  function(next) {
        client.repos.addProtectedBranchTeamRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                body: "Array",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users (addProtectedBranchUserRestrictions)",  function(next) {
        client.repos.addProtectedBranchUserRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                body: "Array",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/collaborators/:collabuser (checkCollaborator)",  function(next) {
        client.repos.checkCollaborator(
            {
                owner: "String",
                repo: "String",
                collabuser: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/compare/:base...:head (compareCommits)",  function(next) {
        client.repos.compareCommits(
            {
                owner: "String",
                repo: "String",
                base: "String",
                head: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /user/repos (create)",  function(next) {
        client.repos.create(
            {
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean",
                auto_init: "Boolean",
                gitignore_template: "String",
                license_template: "String",
                allow_squash_merge: "Boolean",
                allow_merge_commit: "Boolean",
                allow_rebase_merge: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/commits/:sha/comments (createCommitComment)",  function(next) {
        client.repos.createCommitComment(
            {
                owner: "String",
                repo: "String",
                sha: "String",
                body: "String",
                path: "String",
                position: "Number",
                line: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/deployments (createDeployment)",  function(next) {
        client.repos.createDeployment(
            {
                owner: "String",
                repo: "String",
                ref: "String",
                task: "String",
                auto_merge: "Boolean",
                required_contexts: "Array",
                payload: "String",
                environment: "String",
                description: "String",
                transient_environment: "Boolean",
                production_environment: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/deployments/:id/statuses (createDeploymentStatus)",  function(next) {
        client.repos.createDeploymentStatus(
            {
                owner: "String",
                repo: "String",
                id: "String",
                state: "String",
                target_url: "String",
                log_url: "String",
                description: "String",
                environment_url: "String",
                auto_inactive: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/contents/:path (createFile)",  function(next) {
        client.repos.createFile(
            {
                owner: "String",
                repo: "String",
                path: "String",
                message: "String",
                content: "String",
                branch: "String",
                committer: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /orgs/:org/repos (createForOrg)",  function(next) {
        client.repos.createForOrg(
            {
                org: "String",
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean",
                team_id: "Number",
                auto_init: "Boolean",
                gitignore_template: "String",
                license_template: "String",
                allow_squash_merge: "Boolean",
                allow_merge_commit: "Boolean",
                allow_rebase_merge: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/hooks (createHook)",  function(next) {
        client.repos.createHook(
            {
                owner: "String",
                repo: "String",
                name: "String",
                config: "Json",
                events: "Array",
                active: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/keys (createKey)",  function(next) {
        client.repos.createKey(
            {
                owner: "String",
                repo: "String",
                title: "String",
                key: "String",
                read_only: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/projects (createProject)",  function(next) {
        client.repos.createProject(
            {
                owner: "String",
                repo: "String",
                name: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/projects/columns/:id/cards (createProjectCard)",  function(next) {
        client.repos.createProjectCard(
            {
                owner: "String",
                repo: "String",
                id: "String",
                note: "String",
                content_id: "String",
                content_type: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/projects/:number/columns (createProjectColumn)",  function(next) {
        client.repos.createProjectColumn(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/releases (createRelease)",  function(next) {
        client.repos.createRelease(
            {
                owner: "String",
                repo: "String",
                tag_name: "String",
                target_commitish: "String",
                name: "String",
                body: "String",
                draft: "Boolean",
                prerelease: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/statuses/:sha (createStatus)",  function(next) {
        client.repos.createStatus(
            {
                owner: "String",
                repo: "String",
                sha: "String",
                state: "String",
                target_url: "String",
                description: "String",
                context: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo (delete)",  function(next) {
        client.repos.delete(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/releases/assets/:id (deleteAsset)",  function(next) {
        client.repos.deleteAsset(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/comments/:id (deleteCommitComment)",  function(next) {
        client.repos.deleteCommitComment(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/downloads/:id (deleteDownload)",  function(next) {
        client.repos.deleteDownload(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/contents/:path (deleteFile)",  function(next) {
        client.repos.deleteFile(
            {
                owner: "String",
                repo: "String",
                path: "String",
                message: "String",
                sha: "String",
                branch: "String",
                committer: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/hooks/:id (deleteHook)",  function(next) {
        client.repos.deleteHook(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repositories/:repo/invitations/:id (deleteInvite)",  function(next) {
        client.repos.deleteInvite(
            {
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/keys/:id (deleteKey)",  function(next) {
        client.repos.deleteKey(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/projects/:number (deleteProject)",  function(next) {
        client.repos.deleteProject(
            {
                owner: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/projects/columns/cards/:id (deleteProjectCard)",  function(next) {
        client.repos.deleteProjectCard(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/projects/columns/:id (deleteProjectColumn)",  function(next) {
        client.repos.deleteProjectColumn(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/releases/:id (deleteRelease)",  function(next) {
        client.repos.deleteRelease(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo (edit)",  function(next) {
        client.repos.edit(
            {
                owner: "String",
                repo: "String",
                name: "String",
                description: "String",
                homepage: "String",
                private: "Boolean",
                has_issues: "Boolean",
                has_wiki: "Boolean",
                has_downloads: "Boolean",
                default_branch: "String",
                allow_squash_merge: "Boolean",
                allow_merge_commit: "Boolean",
                allow_rebase_merge: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/releases/assets/:id (editAsset)",  function(next) {
        client.repos.editAsset(
            {
                owner: "String",
                repo: "String",
                id: "String",
                name: "String",
                label: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/hooks/:id (editHook)",  function(next) {
        client.repos.editHook(
            {
                owner: "String",
                repo: "String",
                id: "String",
                name: "String",
                config: "Json",
                events: "Array",
                add_events: "Array",
                remove_events: "Array",
                active: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/releases/:id (editRelease)",  function(next) {
        client.repos.editRelease(
            {
                owner: "String",
                repo: "String",
                id: "String",
                tag_name: "String",
                target_commitish: "String",
                name: "String",
                body: "String",
                draft: "Boolean",
                prerelease: "Boolean"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/forks (fork)",  function(next) {
        client.repos.fork(
            {
                owner: "String",
                repo: "String",
                organization: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo (get)",  function(next) {
        client.repos.get(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /user/repos (getAll)",  function(next) {
        client.repos.getAll(
            {
                visibility: "String",
                affiliation: "String",
                type: "String",
                sort: "String",
                direction: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/comments (getAllCommitComments)",  function(next) {
        client.repos.getAllCommitComments(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/:archive_format/:ref (getArchiveLink)",  function(next) {
        client.repos.getArchiveLink(
            {
                owner: "String",
                repo: "String",
                archive_format: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases/assets/:id (getAsset)",  function(next) {
        client.repos.getAsset(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/branches/:branch (getBranch)",  function(next) {
        client.repos.getBranch(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/branches/:branch/protection (getBranchProtection)",  function(next) {
        client.repos.getBranchProtection(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/branches (getBranches)",  function(next) {
        client.repos.getBranches(
            {
                owner: "String",
                repo: "String",
                protected: "Boolean",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repositories/:id (getById)",  function(next) {
        client.repos.getById(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/traffic/clones (getClones)",  function(next) {
        client.repos.getClones(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/collaborators (getCollaborators)",  function(next) {
        client.repos.getCollaborators(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/commits/:sha/status (getCombinedStatus)",  function(next) {
        client.repos.getCombinedStatus(
            {
                owner: "String",
                repo: "String",
                sha: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/commits/:sha (getCommit)",  function(next) {
        client.repos.getCommit(
            {
                owner: "String",
                repo: "String",
                sha: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/comments/:id (getCommitComment)",  function(next) {
        client.repos.getCommitComment(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/commits/:sha/comments (getCommitComments)",  function(next) {
        client.repos.getCommitComments(
            {
                owner: "String",
                repo: "String",
                sha: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/commits (getCommits)",  function(next) {
        client.repos.getCommits(
            {
                owner: "String",
                repo: "String",
                sha: "String",
                path: "String",
                author: "String",
                since: "Date",
                until: "Date",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/contents/:path (getContent)",  function(next) {
        client.repos.getContent(
            {
                owner: "String",
                repo: "String",
                path: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/contributors (getContributors)",  function(next) {
        client.repos.getContributors(
            {
                owner: "String",
                repo: "String",
                anon: "Boolean",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/deployments/:id/statuses (getDeploymentStatuses)",  function(next) {
        client.repos.getDeploymentStatuses(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/deployments (getDeployments)",  function(next) {
        client.repos.getDeployments(
            {
                owner: "String",
                repo: "String",
                sha: "String",
                ref: "String",
                task: "String",
                environment: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/downloads/:id (getDownload)",  function(next) {
        client.repos.getDownload(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/downloads (getDownloads)",  function(next) {
        client.repos.getDownloads(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /orgs/:org/repos (getForOrg)",  function(next) {
        client.repos.getForOrg(
            {
                org: "String",
                type: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /users/:user/repos (getForUser)",  function(next) {
        client.repos.getForUser(
            {
                user: "String",
                type: "String",
                sort: "String",
                direction: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/forks (getForks)",  function(next) {
        client.repos.getForks(
            {
                owner: "String",
                repo: "String",
                sort: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/hooks/:id (getHook)",  function(next) {
        client.repos.getHook(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/hooks (getHooks)",  function(next) {
        client.repos.getHooks(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repositories/:repo/invitations (getInvites)",  function(next) {
        client.repos.getInvites(
            {
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/keys/:id (getKey)",  function(next) {
        client.repos.getKey(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/keys (getKeys)",  function(next) {
        client.repos.getKeys(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/languages (getLanguages)",  function(next) {
        client.repos.getLanguages(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/pages/builds/latest (getLatestPagesBuild)",  function(next) {
        client.repos.getLatestPagesBuild(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases/latest (getLatestRelease)",  function(next) {
        client.repos.getLatestRelease(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/pages (getPages)",  function(next) {
        client.repos.getPages(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/pages/builds/:id (getPagesBuild)",  function(next) {
        client.repos.getPagesBuild(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/pages/builds (getPagesBuilds)",  function(next) {
        client.repos.getPagesBuilds(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/traffic/popular/paths (getPaths)",  function(next) {
        client.repos.getPaths(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/projects/:number (getProject)",  function(next) {
        client.repos.getProject(
            {
                owner: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/projects/columns/cards/:id (getProjectCard)",  function(next) {
        client.repos.getProjectCard(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/projects/columns/:id/cards (getProjectCards)",  function(next) {
        client.repos.getProjectCards(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/projects/columns/:id (getProjectColumn)",  function(next) {
        client.repos.getProjectColumn(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/projects/:number/columns (getProjectColumns)",  function(next) {
        client.repos.getProjectColumns(
            {
                owner: "String",
                repo: "String",
                number: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/projects (getProjects)",  function(next) {
        client.repos.getProjects(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks (getProtectedBranchRequiredStatusChecks)",  function(next) {
        client.repos.getProtectedBranchRequiredStatusChecks(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts (getProtectedBranchRequiredStatusChecksContexts)",  function(next) {
        client.repos.getProtectedBranchRequiredStatusChecksContexts(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/branches/:branch/protection/restrictions (getProtectedBranchRestrictions)",  function(next) {
        client.repos.getProtectedBranchRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams (getProtectedBranchTeamRestrictions)",  function(next) {
        client.repos.getProtectedBranchTeamRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users (getProtectedBranchUserRestrictions)",  function(next) {
        client.repos.getProtectedBranchUserRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repositories (getPublic)",  function(next) {
        client.repos.getPublic(
            {
                since: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/readme (getReadme)",  function(next) {
        client.repos.getReadme(
            {
                owner: "String",
                repo: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/traffic/popular/referrers (getReferrers)",  function(next) {
        client.repos.getReferrers(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases/:id (getRelease)",  function(next) {
        client.repos.getRelease(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases/tags/:tag (getReleaseByTag)",  function(next) {
        client.repos.getReleaseByTag(
            {
                owner: "String",
                repo: "String",
                tag: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases (getReleases)",  function(next) {
        client.repos.getReleases(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/commits/:ref (getShaOfCommitRef)",  function(next) {
        client.repos.getShaOfCommitRef(
            {
                owner: "String",
                repo: "String",
                ref: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/stats/code_frequency (getStatsCodeFrequency)",  function(next) {
        client.repos.getStatsCodeFrequency(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/stats/commit_activity (getStatsCommitActivity)",  function(next) {
        client.repos.getStatsCommitActivity(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/stats/contributors (getStatsContributors)",  function(next) {
        client.repos.getStatsContributors(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/stats/participation (getStatsParticipation)",  function(next) {
        client.repos.getStatsParticipation(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/stats/punch_card (getStatsPunchCard)",  function(next) {
        client.repos.getStatsPunchCard(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/commits/:sha/statuses (getStatuses)",  function(next) {
        client.repos.getStatuses(
            {
                owner: "String",
                repo: "String",
                sha: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/tags (getTags)",  function(next) {
        client.repos.getTags(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/teams (getTeams)",  function(next) {
        client.repos.getTeams(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/traffic/views (getViews)",  function(next) {
        client.repos.getViews(
            {
                owner: "String",
                repo: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /repos/:owner/:repo/releases/:id/assets (listAssets)",  function(next) {
        client.repos.listAssets(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/merges (merge)",  function(next) {
        client.repos.merge(
            {
                owner: "String",
                repo: "String",
                base: "String",
                head: "String",
                commit_message: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/projects/columns/cards/:id/moves (moveProjectCard)",  function(next) {
        client.repos.moveProjectCard(
            {
                owner: "String",
                repo: "String",
                id: "String",
                position: "String",
                column_id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/projects/columns/:id/moves (moveProjectColumn)",  function(next) {
        client.repos.moveProjectColumn(
            {
                owner: "String",
                repo: "String",
                id: "String",
                position: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/hooks/:id/pings (pingHook)",  function(next) {
        client.repos.pingHook(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/branches/:branch/protection (removeBranchProtection)",  function(next) {
        client.repos.removeBranchProtection(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/collaborators/:collabuser (removeCollaborator)",  function(next) {
        client.repos.removeCollaborator(
            {
                owner: "String",
                repo: "String",
                collabuser: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks (removeProtectedBranchRequiredStatusChecks)",  function(next) {
        client.repos.removeProtectedBranchRequiredStatusChecks(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts (removeProtectedBranchRequiredStatusChecksContexts)",  function(next) {
        client.repos.removeProtectedBranchRequiredStatusChecksContexts(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions (removeProtectedBranchRestrictions)",  function(next) {
        client.repos.removeProtectedBranchRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams (removeProtectedBranchTeamRestrictions)",  function(next) {
        client.repos.removeProtectedBranchTeamRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users (removeProtectedBranchUserRestrictions)",  function(next) {
        client.repos.removeProtectedBranchUserRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts (replaceProtectedBranchRequiredStatusChecksContexts)",  function(next) {
        client.repos.replaceProtectedBranchRequiredStatusChecksContexts(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                body: "Array",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams (replaceProtectedBranchTeamRestrictions)",  function(next) {
        client.repos.replaceProtectedBranchTeamRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                body: "Array",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users (replaceProtectedBranchUserRestrictions)",  function(next) {
        client.repos.replaceProtectedBranchUserRestrictions(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                body: "Array",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/pages/builds (requestPageBuild)",  function(next) {
        client.repos.requestPageBuild(
            {
                owner: "String",
                repo: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/hooks/:id/test (testHook)",  function(next) {
        client.repos.testHook(
            {
                owner: "String",
                repo: "String",
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/branches/:branch/protection (updateBranchProtection)",  function(next) {
        client.repos.updateBranchProtection(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                required_status_checks: "Json",
                restrictions: "Json",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/comments/:id (updateCommitComment)",  function(next) {
        client.repos.updateCommitComment(
            {
                owner: "String",
                repo: "String",
                id: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PUT /repos/:owner/:repo/contents/:path (updateFile)",  function(next) {
        client.repos.updateFile(
            {
                owner: "String",
                repo: "String",
                path: "String",
                message: "String",
                content: "String",
                sha: "String",
                branch: "String",
                committer: "Json"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repositories/:repo/invitations/:id (updateInvite)",  function(next) {
        client.repos.updateInvite(
            {
                repo: "String",
                id: "String",
                permission: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/projects/:number (updateProject)",  function(next) {
        client.repos.updateProject(
            {
                owner: "String",
                repo: "String",
                number: "Number",
                name: "String",
                body: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/projects/columns/cards/:id (updateProjectCard)",  function(next) {
        client.repos.updateProjectCard(
            {
                owner: "String",
                repo: "String",
                id: "String",
                note: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/projects/columns/:id (updateProjectColumn)",  function(next) {
        client.repos.updateProjectColumn(
            {
                owner: "String",
                repo: "String",
                id: "String",
                name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks (updateProtectedBranchRequiredStatusChecks)",  function(next) {
        client.repos.updateProtectedBranchRequiredStatusChecks(
            {
                owner: "String",
                repo: "String",
                branch: "String",
                body: "Json",
                page: "Number",
                per_page: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute POST /repos/:owner/:repo/releases/:id/assets (uploadAsset)",  function(next) {
        client.repos.uploadAsset(
            {
                owner: "String",
                repo: "String",
                id: "String",
                filePath: "String",
                name: "String",
                label: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});
