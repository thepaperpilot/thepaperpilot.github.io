<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <NolebaseHighlightTargetedHeading />
    </template>
    <template #layout-bottom>
    	<footer>
			<div>CC {{ new Date().getFullYear() }} The Paper Pilot. <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.</div>
			<div>Any and all opinions listed here are my own and not representative of my employers; future, past and present.</div>
			<div><a href="https://resume.incremental.social/thepaperpilot/thepaperpilot">Resume</a> (not actively seeking new opportunities).</div>
			<div>Site built from <a :href="commitLink">this commit</a> on <time>{{ commitTime }}</time>.</div>
		</footer>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="tsx">
import DefaultTheme from 'vitepress/theme'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import './custom.css'

import fs from "fs"
import path from "path"

import util from 'node:util'
import child_process from 'node:child_process';
const exec = util.promisify(child_process.exec);

const commitLink = (await exec(`git log -n 1 --format="https://code.incremental.social/thepaperpilot/pages/commit/%H"`)).stdout;
const commitTime = (await exec(`git log -n 1 --date=format:"%A, %B %d, %Y at %X" --format=%ad`)).stdout;
</script>