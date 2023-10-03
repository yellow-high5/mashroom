#!/bin/bash

# ファイル名を変更するディレクトリ
directory_path="./content/blog"

# ディレクトリ内のすべての.mdxファイルに対して処理を行う
for file in "$directory_path"/*.mdx; do
  if [[ -f "$file" ]]; then
    # ファイル名から日付と時刻を抽出
    old_filename=$(basename "$file" .mdx)

    echo "$old_filename"

    # 日付と時刻をISO 8601形式に変換して新しいファイル名を生成
    new_date=$(gdate -d "$old_filename" "+%Y-%m-%dT%H:%M:%S%:z")
    new_filename="${new_date}.mdx"

    # ファイル名を変更
    mv "$file" "$directory_path/$new_filename"
  fi
done
